
const express = require('express')
import {handler9796} from "./handler9796";
const app = express()
app.get('/9796', handler9796)
app.listen(3000, () => {})
        