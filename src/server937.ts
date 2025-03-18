
const express = require('express')
import {handler937} from "./handler937";
const app = express()
app.get('/937', handler937)
app.listen(3000, () => {})
        