
const express = require('express')
import {handler9188} from "./handler9188";
const app = express()
app.get('/9188', handler9188)
app.listen(3000, () => {})
        