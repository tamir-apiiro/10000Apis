
const express = require('express')
import {handler237} from "./handler237";
const app = express()
app.get('/237', handler237)
app.listen(3000, () => {})
        