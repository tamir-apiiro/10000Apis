
const express = require('express')
import {handler4945} from "./handler4945";
const app = express()
app.get('/4945', handler4945)
app.listen(3000, () => {})
        