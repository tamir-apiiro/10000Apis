
const express = require('express')
import {handler4498} from "./handler4498";
const app = express()
app.get('/4498', handler4498)
app.listen(3000, () => {})
        