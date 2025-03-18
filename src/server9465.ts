
const express = require('express')
import {handler9465} from "./handler9465";
const app = express()
app.get('/9465', handler9465)
app.listen(3000, () => {})
        