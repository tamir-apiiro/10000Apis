
const express = require('express')
import {handler9108} from "./handler9108";
const app = express()
app.get('/9108', handler9108)
app.listen(3000, () => {})
        