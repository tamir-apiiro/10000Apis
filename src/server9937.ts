
const express = require('express')
import {handler9937} from "./handler9937";
const app = express()
app.get('/9937', handler9937)
app.listen(3000, () => {})
        