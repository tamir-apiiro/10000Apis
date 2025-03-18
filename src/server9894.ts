
const express = require('express')
import {handler9894} from "./handler9894";
const app = express()
app.get('/9894', handler9894)
app.listen(3000, () => {})
        