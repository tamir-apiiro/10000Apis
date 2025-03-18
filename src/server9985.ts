
const express = require('express')
import {handler9985} from "./handler9985";
const app = express()
app.get('/9985', handler9985)
app.listen(3000, () => {})
        