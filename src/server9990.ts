
const express = require('express')
import {handler9990} from "./handler9990";
const app = express()
app.get('/9990', handler9990)
app.listen(3000, () => {})
        