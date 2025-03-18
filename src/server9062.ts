
const express = require('express')
import {handler9062} from "./handler9062";
const app = express()
app.get('/9062', handler9062)
app.listen(3000, () => {})
        