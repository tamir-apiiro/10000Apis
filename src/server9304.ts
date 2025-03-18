
const express = require('express')
import {handler9304} from "./handler9304";
const app = express()
app.get('/9304', handler9304)
app.listen(3000, () => {})
        