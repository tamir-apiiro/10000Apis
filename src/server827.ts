
const express = require('express')
import {handler827} from "./handler827";
const app = express()
app.get('/827', handler827)
app.listen(3000, () => {})
        