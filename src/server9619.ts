
const express = require('express')
import {handler9619} from "./handler9619";
const app = express()
app.get('/9619', handler9619)
app.listen(3000, () => {})
        