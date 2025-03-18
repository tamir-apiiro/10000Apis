
const express = require('express')
import {handler1304} from "./handler1304";
const app = express()
app.get('/1304', handler1304)
app.listen(3000, () => {})
        