
const express = require('express')
import {handler9410} from "./handler9410";
const app = express()
app.get('/9410', handler9410)
app.listen(3000, () => {})
        