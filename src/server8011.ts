
const express = require('express')
import {handler8011} from "./handler8011";
const app = express()
app.get('/8011', handler8011)
app.listen(3000, () => {})
        