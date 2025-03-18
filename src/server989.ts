
const express = require('express')
import {handler989} from "./handler989";
const app = express()
app.get('/989', handler989)
app.listen(3000, () => {})
        