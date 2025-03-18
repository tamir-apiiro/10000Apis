
const express = require('express')
import {handler4304} from "./handler4304";
const app = express()
app.get('/4304', handler4304)
app.listen(3000, () => {})
        