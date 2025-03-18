
const express = require('express')
import {handler7893} from "./handler7893";
const app = express()
app.get('/7893', handler7893)
app.listen(3000, () => {})
        