
const express = require('express')
import {handler3944} from "./handler3944";
const app = express()
app.get('/3944', handler3944)
app.listen(3000, () => {})
        