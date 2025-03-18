
const express = require('express')
import {handler9672} from "./handler9672";
const app = express()
app.get('/9672', handler9672)
app.listen(3000, () => {})
        