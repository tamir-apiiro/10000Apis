
const express = require('express')
import {handler9887} from "./handler9887";
const app = express()
app.get('/9887', handler9887)
app.listen(3000, () => {})
        