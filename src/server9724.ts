
const express = require('express')
import {handler9724} from "./handler9724";
const app = express()
app.get('/9724', handler9724)
app.listen(3000, () => {})
        