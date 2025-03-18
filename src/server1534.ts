
const express = require('express')
import {handler1534} from "./handler1534";
const app = express()
app.get('/1534', handler1534)
app.listen(3000, () => {})
        