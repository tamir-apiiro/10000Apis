
const express = require('express')
import {handler9673} from "./handler9673";
const app = express()
app.get('/9673', handler9673)
app.listen(3000, () => {})
        