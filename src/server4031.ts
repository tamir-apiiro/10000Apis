
const express = require('express')
import {handler4031} from "./handler4031";
const app = express()
app.get('/4031', handler4031)
app.listen(3000, () => {})
        