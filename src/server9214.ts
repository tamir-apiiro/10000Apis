
const express = require('express')
import {handler9214} from "./handler9214";
const app = express()
app.get('/9214', handler9214)
app.listen(3000, () => {})
        