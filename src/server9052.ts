
const express = require('express')
import {handler9052} from "./handler9052";
const app = express()
app.get('/9052', handler9052)
app.listen(3000, () => {})
        