
const express = require('express')
import {handler9967} from "./handler9967";
const app = express()
app.get('/9967', handler9967)
app.listen(3000, () => {})
        