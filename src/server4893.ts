
const express = require('express')
import {handler4893} from "./handler4893";
const app = express()
app.get('/4893', handler4893)
app.listen(3000, () => {})
        