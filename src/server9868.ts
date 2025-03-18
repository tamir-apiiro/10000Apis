
const express = require('express')
import {handler9868} from "./handler9868";
const app = express()
app.get('/9868', handler9868)
app.listen(3000, () => {})
        