
const express = require('express')
import {handler9281} from "./handler9281";
const app = express()
app.get('/9281', handler9281)
app.listen(3000, () => {})
        