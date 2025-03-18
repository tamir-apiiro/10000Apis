
const express = require('express')
import {handler1433} from "./handler1433";
const app = express()
app.get('/1433', handler1433)
app.listen(3000, () => {})
        