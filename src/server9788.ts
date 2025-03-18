
const express = require('express')
import {handler9788} from "./handler9788";
const app = express()
app.get('/9788', handler9788)
app.listen(3000, () => {})
        