
const express = require('express')
import {handler1394} from "./handler1394";
const app = express()
app.get('/1394', handler1394)
app.listen(3000, () => {})
        