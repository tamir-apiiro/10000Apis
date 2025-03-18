
const express = require('express')
import {handler4799} from "./handler4799";
const app = express()
app.get('/4799', handler4799)
app.listen(3000, () => {})
        