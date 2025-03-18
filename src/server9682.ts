
const express = require('express')
import {handler9682} from "./handler9682";
const app = express()
app.get('/9682', handler9682)
app.listen(3000, () => {})
        