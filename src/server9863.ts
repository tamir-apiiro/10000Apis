
const express = require('express')
import {handler9863} from "./handler9863";
const app = express()
app.get('/9863', handler9863)
app.listen(3000, () => {})
        