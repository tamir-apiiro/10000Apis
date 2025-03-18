
const express = require('express')
import {handler7419} from "./handler7419";
const app = express()
app.get('/7419', handler7419)
app.listen(3000, () => {})
        