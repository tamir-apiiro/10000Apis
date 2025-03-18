
const express = require('express')
import {handler9167} from "./handler9167";
const app = express()
app.get('/9167', handler9167)
app.listen(3000, () => {})
        