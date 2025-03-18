
const express = require('express')
import {handler9744} from "./handler9744";
const app = express()
app.get('/9744', handler9744)
app.listen(3000, () => {})
        