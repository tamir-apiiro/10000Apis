
const express = require('express')
import {handler9510} from "./handler9510";
const app = express()
app.get('/9510', handler9510)
app.listen(3000, () => {})
        