
const express = require('express')
import {handler9143} from "./handler9143";
const app = express()
app.get('/9143', handler9143)
app.listen(3000, () => {})
        