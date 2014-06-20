'use strict'
/* global
 * describe, it, beforeEach, afterEach, expect, spyOn, waits, runs,
 * waitsFor, loadFixtures, Waypoint
 */

window.jQuery.each(Waypoint.adapters, function(i, adapter) {
  describe(adapter.name + ' adapter:', function() {
    describe('Waypoint.Group', function() {
      var $ = window.jQuery
      var standard = 50
      var firstWaypoint, secondWaypoint, customGroupWaypoint, defaultGroup

      beforeEach(function() {
        Waypoint.Adapter = adapter.Adapter
        loadFixtures('standard.html')
        firstWaypoint = new Waypoint({
          element: $('#same1')[0]
        })
        secondWaypoint = new Waypoint({
          element: $('#near1')[0]
        })
        customGroupWaypoint = new Waypoint({
          element: $('#same2')[0],
          group: 'custom'
        })
        defaultGroup = firstWaypoint.group
      })

      afterEach(function() {
        firstWaypoint.destroy()
        secondWaypoint.destroy()
        customGroupWaypoint.destroy()
        waits(standard)
      })

      describe('#previous(waypoint)', function() {
        it('returns previous waypoint based on trigger point', function() {
          expect(defaultGroup.previous(secondWaypoint)).toEqual(firstWaypoint)
        })

        it('returns null if on the first waypoint in the group', function() {
          expect(defaultGroup.previous(firstWaypoint)).toBeNull()
        })
      })

      describe('#next(waypoint)', function() {
        it('returns next waypoint based on trigger point', function() {
          expect(defaultGroup.next(firstWaypoint)).toEqual(secondWaypoint)
        })

        it('returns null if on the last waypoint in the group', function() {
          expect(defaultGroup.next(secondWaypoint)).toBeNull()
        })
      })

      describe('#first()', function() {
        it('returns the first waypoint based on trigger point', function() {
          expect(defaultGroup.first()).toEqual(firstWaypoint)
        })
      })

      describe('#last()', function() {
        it('returns the first waypoint based on trigger point', function() {
          expect(defaultGroup.last()).toEqual(secondWaypoint)
        })
      })
    })
  })
})