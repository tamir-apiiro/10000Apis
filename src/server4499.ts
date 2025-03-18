
const express = require('express')
import {handler4499} from "./handler4499";
const app = express()
app.get('/4499', handler4499)
app.listen(3000, () => {})
        