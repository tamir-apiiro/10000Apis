
const express = require('express')
import {handler9784} from "./handler9784";
const app = express()
app.get('/9784', handler9784)
app.listen(3000, () => {})
        