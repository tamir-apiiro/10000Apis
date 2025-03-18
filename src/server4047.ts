
const express = require('express')
import {handler4047} from "./handler4047";
const app = express()
app.get('/4047', handler4047)
app.listen(3000, () => {})
        