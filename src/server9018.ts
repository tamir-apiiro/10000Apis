
const express = require('express')
import {handler9018} from "./handler9018";
const app = express()
app.get('/9018', handler9018)
app.listen(3000, () => {})
        