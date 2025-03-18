
const express = require('express')
import {handler8776} from "./handler8776";
const app = express()
app.get('/8776', handler8776)
app.listen(3000, () => {})
        