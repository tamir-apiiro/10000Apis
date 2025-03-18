
const express = require('express')
import {handler1944} from "./handler1944";
const app = express()
app.get('/1944', handler1944)
app.listen(3000, () => {})
        