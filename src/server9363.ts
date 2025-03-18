
const express = require('express')
import {handler9363} from "./handler9363";
const app = express()
app.get('/9363', handler9363)
app.listen(3000, () => {})
        